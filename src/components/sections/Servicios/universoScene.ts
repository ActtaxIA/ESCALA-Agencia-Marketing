import * as THREE from 'three'

type AnimatedObject = { fn: (t: number) => void }

export type UniversoSceneApi = {
  setProgress: (value: number) => void
  dispose: () => void
}

const SUN_Z = -790
const CAM_END_Z = -748
const WORLD_PROGRESS_END = 0.82
const CRUISE_TRAVEL = 0.9
const TRAVEL_RANGE = 785

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3
}

function updateCamera(
  p: number,
  mx: number,
  my: number,
  camera: THREE.PerspectiveCamera
) {
  if (p >= WORLD_PROGRESS_END) {
    const land = easeOutCubic(Math.min(1, (p - WORLD_PROGRESS_END) / (1 - WORLD_PROGRESS_END)))
    const zCruise = 20 - CRUISE_TRAVEL * TRAVEL_RANGE
    const z = zCruise + (CAM_END_Z - zCruise) * land
    const sway = Math.sin(CRUISE_TRAVEL * Math.PI * 3.2) * 8 * (1 - land)
    const mouse = 1 - land * 0.92
    camera.position.set(
      sway + mx * 1.5 * mouse,
      Math.cos(CRUISE_TRAVEL * Math.PI * 2.1) * 3 * (1 - land) - my * 1.2 * mouse,
      z
    )
    camera.lookAt(sway * 0.4 * (1 - land), 0, THREE.MathUtils.lerp(z - 30, SUN_Z, land))
    return
  }

  const travel = (p / WORLD_PROGRESS_END) * CRUISE_TRAVEL
  const z = 20 - travel * TRAVEL_RANGE
  const sway = Math.sin(travel * Math.PI * 3.2) * 8
  camera.position.set(sway + mx * 1.5, Math.cos(travel * Math.PI * 2.1) * 3 - my * 1.2, z)
  camera.lookAt(sway * 0.4, 0, z - 30)
}

export function initUniversoScene(
  canvas: HTMLCanvasElement,
  scrollRoot: HTMLElement,
  onProgress: (value: number) => void
): UniversoSceneApi {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.outputColorSpace = THREE.SRGBColorSpace

  const scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(0x0f1729, 0.0085)
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 900)
  scene.add(new THREE.AmbientLight(0x3a4566, 1.4))

  const scnv = document.createElement('canvas')
  scnv.width = 64
  scnv.height = 64
  const sctx = scnv.getContext('2d')!
  const sgr = sctx.createRadialGradient(32, 32, 0, 32, 32, 32)
  sgr.addColorStop(0, 'rgba(255,255,255,1)')
  sgr.addColorStop(0.4, 'rgba(255,255,255,.6)')
  sgr.addColorStop(1, 'rgba(255,255,255,0)')
  sctx.fillStyle = sgr
  sctx.fillRect(0, 0, 64, 64)
  const starTex = new THREE.CanvasTexture(scnv)

  const N = 5600
  const sg = new THREE.BufferGeometry()
  const sp = new Float32Array(N * 3)
  const sc = new Float32Array(N * 3)
  const palette = [
    new THREE.Color(0xf4f2ee),
    new THREE.Color(0xff6b35),
    new THREE.Color(0x00bbf9),
    new THREE.Color(0xffb23e),
  ]
  for (let i = 0; i < N; i++) {
    let x = (Math.random() - 0.5) * 280
    let y = (Math.random() - 0.5) * 170
    if (Math.abs(x) < 16 && Math.abs(y) < 12) x += x < 0 ? -16 : 16
    sp[i * 3] = x
    sp[i * 3 + 1] = y
    sp[i * 3 + 2] = -Math.random() * 820 + 40
    const c = palette[Math.random() < 0.82 ? 0 : 1 + ((Math.random() * 3) | 0)]
    sc[i * 3] = c.r
    sc[i * 3 + 1] = c.g
    sc[i * 3 + 2] = c.b
  }
  sg.setAttribute('position', new THREE.BufferAttribute(sp, 3))
  sg.setAttribute('color', new THREE.BufferAttribute(sc, 3))
  scene.add(
    new THREE.Points(
      sg,
      new THREE.PointsMaterial({
        size: 0.35,
        map: starTex,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    )
  )

  function halo(color: number, r: number) {
    return new THREE.Mesh(
      new THREE.SphereGeometry(r, 32, 24),
      new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.14,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    )
  }

  function light(color: number, x: number, y: number, z: number, i = 500) {
    const L = new THREE.PointLight(color, i, 80)
    L.position.set(x, y, z)
    scene.add(L)
    return L
  }

  const animated: AnimatedObject[] = []

  // Mundo 1: Diseño Web
  {
    const g = new THREE.Group()
    g.position.set(13, 0, -85)
    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(7, 2),
      new THREE.MeshBasicMaterial({ color: 0xff6b35, wireframe: true, transparent: true, opacity: 0.55 })
    )
    g.add(wire)
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(4.6, 1),
      new THREE.MeshStandardMaterial({
        color: 0x35200f,
        roughness: 0.5,
        emissive: 0xff6b35,
        emissiveIntensity: 0.35,
        flatShading: true,
      })
    )
    g.add(core)
    const verts = new THREE.IcosahedronGeometry(7, 1).attributes.position
    const ng = new THREE.BufferGeometry()
    ng.setAttribute('position', verts.clone())
    g.add(new THREE.Points(ng, new THREE.PointsMaterial({ color: 0xffb35c, size: 0.34, depthWrite: false })))
    g.add(halo(0xff6b35, 9))
    light(0xff6b35, 4, 5, -78, 700)
    scene.add(g)
    animated.push({ fn: (t) => { wire.rotation.y = t * 0.1; core.rotation.y = -t * 0.06 } })
  }

  // Mundo 2: SEO Local
  {
    const g = new THREE.Group()
    g.position.set(-13, 1, -175)
    const planet = new THREE.Mesh(
      new THREE.SphereGeometry(5.5, 48, 36),
      new THREE.MeshStandardMaterial({ color: 0x4a3210, roughness: 0.7, emissive: 0xffb23e, emissiveIntensity: 0.18 })
    )
    g.add(planet)
    g.add(halo(0xffb23e, 7.2))
    const sats = new THREE.Group()
    for (let i = 0; i < 26; i++) {
      const a = (i / 26) * Math.PI * 2
      const r = 8 + (i % 3) * 1.4
      const pin = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.32, 0),
        new THREE.MeshStandardMaterial({ color: 0xffb23e, emissive: 0xffb23e, emissiveIntensity: 0.7 })
      )
      pin.position.set(Math.cos(a) * r, (Math.random() - 0.5) * 1.6, Math.sin(a) * r)
      sats.add(pin)
    }
    sats.rotation.x = 0.35
    g.add(sats)
    light(0xffb23e, -6, 6, -168, 650)
    scene.add(g)
    animated.push({ fn: (t) => { sats.rotation.y = t * 0.22; planet.rotation.y = t * 0.05 } })
  }

  // Mundo 3: Redes Sociales
  {
    const g = new THREE.Group()
    g.position.set(12, -1, -265)
    const nodes: THREE.Vector3[] = []
    const nodeGeo = new THREE.SphereGeometry(0.26, 12, 10)
    const nodeMat = new THREE.MeshStandardMaterial({ color: 0x00bbf9, emissive: 0x00bbf9, emissiveIntensity: 0.9 })
    for (let i = 0; i < 30; i++) {
      const v = new THREE.Vector3().randomDirection().multiplyScalar(4.5 + Math.random() * 3.5)
      nodes.push(v)
      const n = new THREE.Mesh(nodeGeo, nodeMat)
      n.position.copy(v)
      n.scale.setScalar(0.7 + Math.random() * 1.1)
      g.add(n)
    }
    const linePts: THREE.Vector3[] = []
    nodes.forEach((a, i) => {
      const near = nodes
        .map((b, j) => ({ d: a.distanceTo(b), j }))
        .filter((o) => o.j !== i)
        .sort((x, y) => x.d - y.d)
        .slice(0, 2)
      near.forEach((o) => { linePts.push(a.clone(), nodes[o.j].clone()) })
    })
    const lg = new THREE.BufferGeometry().setFromPoints(linePts)
    g.add(new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: 0x00bbf9, transparent: true, opacity: 0.32 })))
    g.add(halo(0x00bbf9, 9))
    light(0x00bbf9, 6, 4, -258, 600)
    scene.add(g)
    animated.push({ fn: (t) => { g.rotation.y = t * 0.12; g.rotation.x = Math.sin(t * 0.3) * 0.12 } })
  }

  // Mundo 4: Google Ads
  {
    const g = new THREE.Group()
    g.position.set(-12, 0, -350)
    const center = new THREE.Mesh(
      new THREE.SphereGeometry(1.6, 32, 24),
      new THREE.MeshStandardMaterial({ color: 0xf7444e, emissive: 0xf7444e, emissiveIntensity: 1.1 })
    )
    g.add(center)
    const rings: THREE.Mesh[] = []
    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(3.4 + i * 1.9, 0.12, 12, 72),
        new THREE.MeshStandardMaterial({
          color: 0xf7444e,
          emissive: 0xf7444e,
          emissiveIntensity: 0.4,
          transparent: true,
          opacity: 0.85 - i * 0.18,
        })
      )
      g.add(ring)
      rings.push(ring)
    }
    const clicks = new THREE.Group()
    for (let i = 0; i < 10; i++) {
      const c = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), new THREE.MeshBasicMaterial({ color: 0xffd9dc }))
      const a = (i / 10) * Math.PI * 2
      c.position.set(Math.cos(a) * 7.2, 0, Math.sin(a) * 7.2)
      clicks.add(c)
    }
    g.add(clicks)
    g.add(halo(0xf7444e, 8.5))
    light(0xf7444e, -5, 4, -342, 650)
    scene.add(g)
    animated.push({
      fn: (t) => {
        rings.forEach((r, i) => { r.rotation.x = t * (0.25 + i * 0.12); r.rotation.y = t * (0.18 + i * 0.08) })
        clicks.rotation.y = -t * 0.5
        center.scale.setScalar(1 + Math.sin(t * 2.4) * 0.08)
      },
    })
  }

  // Mundo 5: Apps con IA
  {
    const g = new THREE.Group()
    g.position.set(11, 1, -435)
    const M = 900
    const pg = new THREE.BufferGeometry()
    const pp = new Float32Array(M * 3)
    for (let i = 0; i < M; i++) {
      const v = new THREE.Vector3(
        (Math.random() + Math.random() + Math.random() - 1.5) * 4.2,
        (Math.random() + Math.random() + Math.random() - 1.5) * 3.4,
        (Math.random() + Math.random() + Math.random() - 1.5) * 4.2
      )
      pp[i * 3] = v.x
      pp[i * 3 + 1] = v.y
      pp[i * 3 + 2] = v.z
    }
    pg.setAttribute('position', new THREE.BufferAttribute(pp, 3))
    const cloud = new THREE.Points(
      pg,
      new THREE.PointsMaterial({
        color: 0x9b5de5,
        size: 0.16,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    )
    g.add(cloud)
    const core = new THREE.Mesh(new THREE.SphereGeometry(1.1, 24, 18), new THREE.MeshBasicMaterial({ color: 0xcbb2f2 }))
    g.add(core)
    g.add(halo(0x9b5de5, 8))
    light(0x9b5de5, 5, 4, -428, 650)
    scene.add(g)
    animated.push({
      fn: (t) => {
        cloud.rotation.y = t * 0.14
        core.scale.setScalar(1 + Math.sin(t * 3) * 0.14)
        ;(cloud.material as THREE.PointsMaterial).opacity = 0.7 + Math.sin(t * 1.6) * 0.15
      },
    })
  }

  // Mundo 6: Chatbots
  {
    const g = new THREE.Group()
    g.position.set(-12, 0, -520)
    const body = new THREE.Mesh(
      new THREE.SphereGeometry(2.6, 32, 24),
      new THREE.MeshStandardMaterial({ color: 0x0a3d36, roughness: 0.5, emissive: 0x00f5d4, emissiveIntensity: 0.3 })
    )
    g.add(body)
    const dish = new THREE.Mesh(
      new THREE.ConeGeometry(1.1, 1, 24, 1, true),
      new THREE.MeshStandardMaterial({
        color: 0x00f5d4,
        emissive: 0x00f5d4,
        emissiveIntensity: 0.5,
        side: THREE.DoubleSide,
      })
    )
    dish.position.set(0, 3.2, 0)
    dish.rotation.x = Math.PI
    g.add(dish)
    const waves: THREE.Mesh[] = []
    for (let i = 0; i < 3; i++) {
      const w = new THREE.Mesh(
        new THREE.TorusGeometry(3.6, 0.06, 8, 64),
        new THREE.MeshBasicMaterial({ color: 0x00f5d4, transparent: true, opacity: 0.5 })
      )
      w.rotation.x = Math.PI / 2
      g.add(w)
      waves.push(w)
    }
    const bub = new THREE.Group()
    for (let i = 0; i < 7; i++) {
      const b = new THREE.Mesh(
        new THREE.SphereGeometry(0.42, 14, 10),
        new THREE.MeshStandardMaterial({ color: 0xdffff8, emissive: 0x00f5d4, emissiveIntensity: 0.5 })
      )
      b.scale.set(1.3, 0.85, 0.6)
      const a = (i / 7) * Math.PI * 2
      b.position.set(Math.cos(a) * 5.6, Math.sin(i * 2.1) * 1.4, Math.sin(a) * 5.6)
      bub.add(b)
    }
    g.add(bub)
    g.add(halo(0x00f5d4, 7.5))
    light(0x00f5d4, -6, 4, -512, 650)
    scene.add(g)
    animated.push({
      fn: (t) => {
        bub.rotation.y = t * 0.35
        waves.forEach((w, i) => {
          const p = ((t * 0.45 + i / 3) % 1)
          w.scale.setScalar(0.5 + p * 1.9)
          ;(w.material as THREE.MeshBasicMaterial).opacity = 0.55 * (1 - p)
        })
      },
    })
  }

  // Mundo 7: Branding
  {
    const g = new THREE.Group()
    g.position.set(12, 0, -605)
    const gem = new THREE.Mesh(
      new THREE.OctahedronGeometry(3.4, 0),
      new THREE.MeshStandardMaterial({
        color: 0x6b4a10,
        roughness: 0.15,
        metalness: 0.5,
        emissive: 0xffd166,
        emissiveIntensity: 0.45,
        flatShading: true,
      })
    )
    gem.scale.y = 1.5
    g.add(gem)
    const sparks = new THREE.Group()
    for (let i = 0; i < 14; i++) {
      const s = new THREE.Mesh(new THREE.OctahedronGeometry(0.16, 0), new THREE.MeshBasicMaterial({ color: 0xffe9b8 }))
      s.position.copy(new THREE.Vector3().randomDirection().multiplyScalar(5 + Math.random() * 2.5))
      sparks.add(s)
    }
    g.add(sparks)
    const ringP = new THREE.Mesh(
      new THREE.TorusGeometry(5.2, 0.08, 10, 72),
      new THREE.MeshStandardMaterial({
        color: 0xffd166,
        emissive: 0xffd166,
        emissiveIntensity: 0.4,
        transparent: true,
        opacity: 0.6,
      })
    )
    ringP.rotation.x = Math.PI / 2.3
    g.add(ringP)
    g.add(halo(0xffd166, 8))
    light(0xffd166, 6, 5, -598, 650)
    scene.add(g)
    animated.push({
      fn: (t) => {
        gem.rotation.y = t * 0.4
        sparks.rotation.y = -t * 0.15
        ringP.rotation.z = t * 0.2
        gem.position.y = Math.sin(t * 1.2) * 0.3
      },
    })
  }

  // Mundo 8: Email Marketing
  {
    const g = new THREE.Group()
    g.position.set(-11, 0, -690)
    const inbox = new THREE.Mesh(
      new THREE.SphereGeometry(1.6, 28, 20),
      new THREE.MeshStandardMaterial({ color: 0x4a2410, roughness: 0.6, emissive: 0xff8c5a, emissiveIntensity: 0.3 })
    )
    g.add(inbox)
    const orbit = new THREE.Group()
    orbit.rotation.x = 0.25
    g.add(orbit)
    const comet = new THREE.Group()
    comet.position.set(6.2, 0, 0)
    orbit.add(comet)
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.7, 20, 16), new THREE.MeshBasicMaterial({ color: 0xffe3c8 }))
    comet.add(head)
    const letter = new THREE.Mesh(
      new THREE.BoxGeometry(0.55, 0.38, 0.06),
      new THREE.MeshStandardMaterial({ color: 0xfff6ec, emissive: 0xff8c5a, emissiveIntensity: 0.35 })
    )
    comet.add(letter)
    const TN = 240
    const tg = new THREE.BufferGeometry()
    const tp = new Float32Array(TN * 3)
    for (let i = 0; i < TN; i++) {
      const d = Math.random() * 5.5
      tp[i * 3] = d + 0.5
      tp[i * 3 + 1] = (Math.random() - 0.5) * d * 0.28
      tp[i * 3 + 2] = (Math.random() - 0.5) * d * 0.28
    }
    tg.setAttribute('position', new THREE.BufferAttribute(tp, 3))
    comet.add(
      new THREE.Points(
        tg,
        new THREE.PointsMaterial({
          color: 0xff8c5a,
          size: 0.14,
          transparent: true,
          opacity: 0.8,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
      )
    )
    g.add(halo(0xff8c5a, 7))
    light(0xff8c5a, -5, 4, -682, 600)
    scene.add(g)
    animated.push({
      fn: (t) => {
        orbit.rotation.y = t * 0.55
        letter.rotation.y = t * 1.2
        inbox.rotation.y = t * 0.08
      },
    })
  }

  // Destino: estrella ESKALA
  const sun = new THREE.Mesh(new THREE.SphereGeometry(13, 64, 48), new THREE.MeshBasicMaterial({ color: 0xffe3c8 }))
  sun.position.set(0, 0, -790)
  scene.add(sun)
  const sunH = halo(0xff6b35, 22)
  sunH.position.copy(sun.position)
  scene.add(sunH)
  const sunH2 = halo(0xffb23e, 30)
  sunH2.position.copy(sun.position)
  scene.add(sunH2)
  light(0xffb35c, 0, 0, -760, 3500)
  animated.push({
    fn: (t) => {
      sunH.scale.setScalar(1 + Math.sin(t * 1.3) * 0.04)
      sunH2.scale.setScalar(1 + Math.cos(t * 0.9) * 0.05)
    },
  })

  let target = 0
  let smooth = 0
  let mx = 0
  let my = 0
  let raf = 0

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const clock = new THREE.Clock()

  function onScroll() {
    const rootTop = scrollRoot.getBoundingClientRect().top + window.scrollY
    const rootHeight = scrollRoot.offsetHeight
    const maxScroll = rootHeight - window.innerHeight
    if (maxScroll <= 0) {
      target = 0
      return
    }

    const scrolled = Math.min(Math.max(0, window.scrollY - rootTop), maxScroll)
    const dest = document.getElementById('destino')

    if (dest && scrollRoot.contains(dest)) {
      const destTop = dest.getBoundingClientRect().top + window.scrollY - rootTop
      const landingStart = Math.max(destTop - window.innerHeight, 0)
      const landingEnd = destTop

      if (scrolled <= landingStart) {
        target = landingStart > 0 ? (scrolled / landingStart) * WORLD_PROGRESS_END : 0
      } else if (scrolled <= landingEnd) {
        const land = (scrolled - landingStart) / Math.max(landingEnd - landingStart, 1)
        target = WORLD_PROGRESS_END + land * (1 - WORLD_PROGRESS_END)
      } else {
        target = 1
      }
    } else {
      target = scrolled / maxScroll
    }

    target = Math.min(1, Math.max(0, target))
  }

  function onPointerMove(e: PointerEvent) {
    mx = (e.clientX / window.innerWidth - 0.5) * 2
    my = (e.clientY / window.innerHeight - 0.5) * 2
  }

  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  function animate() {
    const t = clock.getElapsedTime()
    const ease = target >= 0.99 ? 0.35 : target > 0.7 ? 0.16 : 0.06
    smooth += (target - smooth) * (reduced ? 1 : ease)
    if (target >= 0.999) smooth = 1

    updateCamera(smooth, mx, my, camera)

    if (!reduced) animated.forEach((a) => a.fn(t))

    onProgress(smooth)
    renderer.render(scene, camera)
    raf = requestAnimationFrame(animate)
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('resize', onResize)
  onScroll()
  animate()

  return {
    setProgress(value: number) {
      target = value
    },
    dispose() {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      sg.dispose()
      starTex.dispose()
    },
  }
}
