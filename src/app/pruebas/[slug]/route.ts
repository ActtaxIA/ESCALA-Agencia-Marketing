import { readFile } from 'fs/promises'
import { join } from 'path'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const SLUG_PATTERN = /^[a-z0-9-]+$/i

async function loadDemoHtml(slug: string): Promise<string | null> {
  const candidates = [
    join(process.cwd(), 'public', 'pruebas', slug, 'index.html'),
    join(process.cwd(), '..', 'public', 'pruebas', slug, 'index.html'),
  ]

  for (const filePath of candidates) {
    try {
      return await readFile(filePath, 'utf-8')
    } catch {
      // standalone vs dev
    }
  }

  return null
}

export async function GET(
  _request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params

  if (!SLUG_PATTERN.test(slug)) {
    return new NextResponse('Not found', { status: 404 })
  }

  const html = await loadDemoHtml(slug)
  if (!html) {
    return new NextResponse('Not found', { status: 404 })
  }

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  })
}
