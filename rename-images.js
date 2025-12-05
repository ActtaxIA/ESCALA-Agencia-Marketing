const fs = require('fs');
const path = require('path');

const imageDir = './images/IA/';

// Mapeo de nombres antiguos a nuevos nombres cortos
const renameMap = {
  // Logos
  'Diseños de logo para Casi Cinco.png': 'logo-casi-cinco.png',
  
  // WhatsApp
  'WhatsApp Image 2025-10-13 at 11.59.37.jpeg': 'whatsapp-image-oct-2025.jpeg',
  
  // ChatGPT Images
  'ChatGPT Image 30 ago 2025, 09_12_53.png': 'chatgpt-ago-30.png',
  'ChatGPT Image 28 ago 2025, 17_38_20.png': 'chatgpt-ago-28.png',
  'ChatGPT Image 8 jun 2025, 11_19_49.png': 'chatgpt-jun-8.png',
  'ChatGPT Image 3 abr 2025, 11_28_23.png': 'chatgpt-abr-3.png',
  
  // Camper scenes
  '20250720_1159_Campervan in Pyrenean Escape_simple_compose_01k0km8qhvfagscd1x73w5w5cz.png': 'camper-pyrenees-1.png',
  '20250720_2208_Nuts and Bolts Camper_simple_compose_01k0mq4tare11r586frnkx2gq7.png': 'camper-nuts-bolts.png',
  '20250720_1203_Starry Mountain Camper Retreat_simple_compose_01k0kmf4djeakb9sfhcb3q3p3w.png': 'camper-mountain-starry.png',
  '20250720_1159_Campervan in Pyrenean Escape_simple_compose_01k0km8qhtep8b3w0q747q3qsn.png': 'camper-pyrenees-2.png',
  '20250720_1159_Cliffside Camper Breakfast_simple_compose_01k0km97befqat405fc46wfdcn.png': 'camper-cliffside-breakfast.png',
  '20250621_1111_Autocaravana en Costa Tropical_simple_compose_01jy8w1qvafj7a8t03kkgvxt21.png': 'camper-costa-tropical.png',
  
  // Daily journey
  '20250618_2138_Sky\'s Daily Journey_simple_compose_01jy28rqe0ee2a3ngn46qx92q0.png': 'camper-daily-journey.png',
  '20250618_2139_Verano Infinito_simple_compose_01jy28qhmven1t0sp1n19pjk8f.png': 'camper-verano-infinito.png',
  '20250618_2131_Autocaravana Extensa en Carretera_simple_compose_01jy28a2tgefyrd20dz47vfkgg.png': 'camper-carretera-1.png',
  '20250618_2127_Autocaravana Extensa en Carretera_simple_compose_01jy282w64eygr09rxg3kf4zgw.png': 'camper-carretera-2.png',
  
  // CEO and Urban
  '20250603_2110_CEO en la Ciudad_simple_compose_01jwvk3vx4f35amxtdbtj1g9y5.png': 'ceo-ciudad.png',
  '20250530_2243_Van Rental Graffiti Style_remix_01jwhevparet2tyycmbzxbt91f.png': 'camper-graffiti-remix.png',
  '20250530_2216_Grafiti Urbano con Autocaravana_simple_compose_01jwhdbxnpf3e9bmzha0eg8bfh.png': 'camper-graffiti-urbano.png',
  '20250530_2208_Graffiti Camper Van_simple_compose_01jwhcw1f2em1t1fd86vvg1bf6.png': 'camper-graffiti-1.png',
  '20250530_2206_Graffiti en Autocaravana_simple_compose_01jwhcq72ee3ssxq9k0hhddfws.png': 'camper-graffiti-2.png',
  '20250530_2203_Graffiti Fiat Ducato Camper_simple_compose_01jwhcje8neycsx05nhfwe3ekr.png': 'camper-graffiti-fiat.png',
  
  // Red room
  '20250530_2156_Fiat Van in Red Room_simple_compose_01jwhc8f0ve1vb0tavn4rzaf93 (1).png': 'camper-red-room-1.png',
  '20250530_2156_Fiat Van in Red Room_simple_compose_01jwhc8f0ve1vb0tavn4rzaf93.png': 'camper-red-room-2.png',
  '20250530_2153_Red Room Camper_simple_compose_01jwhc1db9fq6san5bfyd0jyyp.png': 'camper-red-room-3.png',
  '20250530_2145_Minimalist Red Room_simple_compose_01jwhbkv5heqpabsdmg7mza1cq.png': 'red-room-minimal.png',
  '20250530_2143_Red Room Reflections_simple_compose_01jwhbg9rcfm0a1h8yzgb0wjn6.png': 'red-room-reflections.png',
  
  // Misc
  '20250530_2143_Grape Jelly Dachshund_simple_compose_01jwhbdfk2eat9q32byspcfkrq.png': 'dachshund-grape.png',
  '20250530_2145_Campervan Beach Advertisement_remix_01jwhbh9hhfknbddv1bw6y7ygd.png': 'camper-beach-ad.png',
  
  // Corner sun
  '20250516_2302_Camper y Sol Esquinero_simple_compose_01jvdecqj3exesmb40wtrxz5df (1).png': 'camper-sol-esquina-1.png',
  '20250516_2302_Camper y Sol Esquinero_simple_compose_01jvdecqj3exesmb40wtrxz5df.png': 'camper-sol-esquina-2.png',
  
  // Murcia
  '20250519_2009_Murcia Tranquila_ Unida_simple_compose_01jvmvpjdyfbpb2dsmx7mvc8qe.png': 'murcia-tranquila.png',
  '20250519_1955_Contraste Nocturno en Murcia_simple_compose_01jvmtvzr5eeh8fr66ee28peqt.png': 'murcia-nocturno.png',
  
  // Medical
  '20250517_1950_Negligencia en Telemedicina_simple_compose_01jvfnstq6f9pajk08rg9y5ac3.png': 'negligencia-medica.png',
  
  // Terrain
  '20250516_2319_Camper Fiat Todoterreno_simple_compose_01jvdfaqs6em0t8hnqyx5paxa4.png': 'camper-todoterreno.png',
  
  // DALL-E folletos
  'DALL·E 2025-02-28 09.59.16 - Diseño de contraportada para un folleto desplegable promocional de alquiler de campers. La parte superior presenta el logotipo de \'Furgocasa\' con el e.webp': 'folleto-contraportada.webp',
  'DALL·E 2025-02-28 09.59.14 - Diseño de doble página interior para un folleto desplegable promocional de alquiler de campers. La parte izquierda tiene un fondo limpio con imágenes .webp': 'folleto-interior.webp',
  'DALL·E 2025-02-28 09.59.13 - Diseño de portada para un folleto desplegable promocional de alquiler de campers. La imagen principal muestra una autocaravana camper Fiat Ducato H2 L.webp': 'folleto-portada.webp',
  'DALL·E 2025-02-28 09.58.18 - Diseño de portada para un folleto desplegable promocional de alquiler de campers. Opción 5_ Una camper Fiat Ducato H2 L3 estacionada en un camino cost.webp': 'folleto-portada-v5.webp',
  'DALL·E 2025-02-28 09.58.15 - Diseño de portada para un folleto desplegable promocional de alquiler de campers. Opción 4_ Una camper Fiat Ducato H2 L3 aparcada en una playa de Murc.webp': 'folleto-portada-v4.webp',
  
  // Beach and nature
  'DALL·E 2025-02-27 17.41.37 - A photorealistic image of a Fiat Ducato camper van parked on a remote sandy beach in Murcia, Spain. The van is positioned facing the sea, with gentle .webp': 'camper-beach-murcia.webp',
  'DALL·E 2025-02-15 09.56.54 - A fantastical representation of a flat Earth, depicted as a circular landmass floating in space with waterfalls cascading off the edges. The continent.webp': 'flat-earth-fantasy.webp',
  'DALL·E 2025-02-06 11.52.28 - A futuristic silver sports car with gull-wing doors open, parked in a bright summer city with clear skies and palm trees, evoking a July 1st atmospher.webp': 'sports-car-summer.webp',
  
  // Aerial views
  'DALL·E 2025-02-03 09.13.24 - A highly realistic aerial view of a camper van driving along a scenic road. The camper is a Fiat Ducato H2 L3.webp': 'camper-aerial-road.webp',
  'DALL·E 2025-02-03 09.13.33 - A highly realistic aerial view of a Fiat Ducato H2 L3 camper van parked on a Spanish beach at night, illuminated by the soft glow of the moon. The cam.webp': 'camper-aerial-beach-night.webp',
  'DALL·E 2025-02-03 09.13.24 - A highly realistic aerial view of a camper van driving along a scenic road. The camper is a Fiat Ducato H2 L3, the same as in previous images. The roa.webp': 'camper-aerial-scenic.webp',
  
  // Laura portraits
  'DALL·E 2025-02-03 09.13.32 - A highly realistic image of Laura, the same young Central European woman as in previous images, around 20 years old, with blonde hair styled exactly a.webp': 'laura-portrait-1.webp',
  'DALL·E 2025-02-03 09.13.28 - A highly realistic image of Laura, the same young Central European woman as in previous images, around 20 years old, with blonde hair styled exactly a.webp': 'laura-portrait-2.webp',
  'DALL·E 2025-02-03 09.13.22 - A highly realistic image of Laura, the same young Central European woman as in previous images, around 20 years old, with blonde hair styled exactly a.webp': 'laura-portrait-3.webp',
  'DALL·E 2025-02-03 09.13.19 - A highly realistic image of Laura, the same young Central European woman as in previous images, around 20 years old, with blonde hair styled exactly a.webp': 'laura-portrait-4.webp',
  'DALL·E 2025-02-03 09.13.14 - A highly realistic image of Laura, the same young Central European woman as in previous images, around 20 years old, with blonde hair styled exactly a.webp': 'laura-portrait-5.webp',
  'DALL·E 2025-02-02 23.20.54 - A realistic wide-angle image of Laura, a young Central European woman around 20 years old, with blonde hair styled the same as in previous images. She.webp': 'laura-wide-angle-1.webp',
  'DALL·E 2025-02-02 23.20.52 - A realistic wide-angle image of Laura, a young Central European woman around 20 years old, with blonde hair styled the same as in previous images. She.webp': 'laura-wide-angle-2.webp',
  'DALL·E 2025-02-02 23.20.49 - A realistic close-up image of Laura, a young Central European woman around 20 years old, with blonde hair styled the same as in previous images. She i.webp': 'laura-closeup.webp',
  'DALL·E 2025-02-02 22.57.28 - A realistic image of Laura, a young Central European woman around 20 years old, with blonde hair styled the same as in previous images. She is steppin.webp': 'laura-stepping-out.webp',
  'DALL·E 2025-02-02 22.57.21 - A realistic image of Laura, a young Central European woman around 20 years old, with blonde hair and striking beauty, sitting in an airplane seat by t.webp': 'laura-airplane.webp',
  'DALL·E 2025-02-02 22.57.15 - A realistic image of Laura, a young Central European woman around 20 years old, with blonde hair and striking beauty, standing in her living room look.webp': 'laura-living-room-1.webp',
  'DALL·E 2025-02-02 22.54.22 - A realistic image of Laura, a young Central European woman around 20 years old, with blonde hair and striking beauty, standing in her living room look.webp': 'laura-living-room-2.webp',
  
  // Winter landscapes
  'DALL·E 2025-01-06 12.32.14 - A minimalistic vector illustration of a serene winter landscape with people enjoying outdoor activities, inspired by the style of a Fiat Ducato promot.webp': 'winter-landscape-minimal.webp',
  'DALL·E 2025-01-06 10.16.09 - A vertical promotional poster featuring a Fiat Ducato camper van clearly ascending a snowy hill, facing upwards. The design emphasizes simplicity with.webp': 'camper-snowy-hill-poster.webp',
  'DALL·E 2025-01-06 10.14.46 - A vertical promotional poster featuring a Fiat Ducato camper van ascending a snowy mountain pass, facing upwards to emphasize motion and the concept o.webp': 'camper-mountain-pass-poster.webp',
  
  // Surreal
  'DALL·E 2024-12-29 12.44.51 - A surreal and symbolic image of a bull dressed as a bullfighter, entering a bullring. The bull wears the crown of the Statue of Liberty on its head. T.webp': 'bull-bullfighter-surreal.webp',
  'DALL·E 2024-12-29 11.54.33 - A surrealistic and whimsical image of a flock of seagulls flying through a bright, blue sky. Each seagull is sticking out its tongue, and their tongue.webp': 'seagulls-tongues-surreal.webp',
  'DALL·E 2024-12-29 11.26.56 - A surrealistic depiction of Noah, the biblical character, sitting at a wooden table inside his ark. The setting is cozy and illuminated with a warm gl.webp': 'noah-ark-surreal.webp',
  
  // Logos and minimalist
  'DALL·E 2024-12-22 12.41.07 - A minimalist vector-style logo featuring a Fiat Ducato H2 L3 campervan silhouette integrated with a key and a padlock icon, symbolizing secure parking.webp': 'logo-secure-parking-1.webp',
  'DALL·E 2024-12-22 12.35.48 - A minimalist vector-style logo featuring a Fiat Ducato H2 L3 campervan silhouette integrated with a key and a padlock icon, symbolizing secure parking.webp': 'logo-secure-parking-2.webp',
  'DALL·E 2024-12-22 12.33.31 - A minimalist vector logo for secure motorhome parking, featuring a keyhole design integrated with a campervan silhouette, emphasizing security. The lo.webp': 'logo-keyhole-security.webp',
  
  // Industrial posters
  'FURGOCASA_CAMPERVANS_A_black_and_white_photograph_of_the_skull_in_smoke_372b69c9-e441-4944-b7fc-0628fbb37d94.png': 'skull-smoke-bw.png',
  'DALL·E 2024-12-11 19.42.13 - A minimalist and industrial-style vector design poster for Fiat Ducato H2L3 camper vans. The layout is strictly aligned, featuring a bold title \'EVITA.webp': 'poster-industrial-evita.webp',
  'DALL·E 2024-12-11 19.15.39 - An ultra-industrial minimalist vector design poster for Fiat Ducato H2L3 camper vans. The layout has a wireframe-style drawing of the camper van promi.webp': 'poster-wireframe.webp',
  
  // Firefly series
  'Firefly Un tio gordo loco junto al mar 22996.jpg': 'firefly-gordo-mar.jpg',
  'Firefly Una pintura al óleo hiperrealista, fondo blanco de un ojo que se asoma a través del papel ra.jpg': 'firefly-ojo-papel.jpg',
  
  // Sin título series
  'Sin título (5).png': 'untitled-5.png',
  'Sin título (4).png': 'untitled-4.png',
  'Sin título (3).png': 'untitled-3.png',
  'Sin título (2).png': 'untitled-2.png',
  'Sin título (1).png': 'untitled-1.png',
  'Sin título.png': 'untitled.png',
  
  // More Firefly
  'Firefly Dibujo de continuidad de una sola línea de una tienda de campaña y una fogata en el bosque e.jpg': 'firefly-tent-campfire-line.jpg',
  'Firefly Dibujo de continuidad de una sola línea de la frase -black friday- elaborado con un trazo co.jpg': 'firefly-black-friday-line.jpg',
  'Firefly Dibujo de continuidad de una sola línea de una autocaravana elaborado con un trazo continuo..jpg': 'firefly-camper-line.jpg',
  'Firefly Cebra de vista lateral, rayas verticales blancas y negras de fondo 61608.jpg': 'firefly-zebra-stripes.jpg',
  'Firefly Crea una morsa de buceo y esnórquel bajo el agua para que puedas ver el buceo y la cola de l.jpg': 'firefly-walrus-diving.jpg',
  'Firefly Ciudad futurista. calle estrecha. luces de neon -descuento-. Súper Negro e Hiper Blanco, Luz.jpg': 'firefly-city-neon-discount.jpg',
  'Firefly Ciudad futurista. Súper Negro e Hiper Blanco, Luz Diurna 34417.jpg': 'firefly-city-daylight.jpg',
  
  // Trichocereus
  'FURGOCASA_CAMPERVANS_trichocereus_pachanoi_plantation_cccd388e-4ad6-4f13-8736-1cd2af61ffa7_upscaled.png': 'trichocereus-plantation.png',
  'FURGOCASA_CAMPERVANS_various_trichocereus_pachanoi_ec48a055-6a17-4001-863b-eebfd624c0fb_upscaled.png': 'trichocereus-various.png',
  
  // Snow scenes
  'FURGOCASA_CAMPERVANS_snowing_in_a_small_central_europe_town_28295118-3337-4e0f-810c-a9f05145a463_upscaled.png': 'snow-central-europe.png',
  'FURGOCASA_CAMPERVANS_chirstmas_market_in_a_samll_town_c57de732-2285-4263-af06-7115578f2580_upscaled.png': 'christmas-market-town.png',
  'FURGOCASA_CAMPERVANS_a_motorhome_parked_in_a_sky_resort_caf90a93-1f80-4c30-a29f-36c215609744_upscaled.png': 'motorhome-ski-resort-1.png',
  'FURGOCASA_CAMPERVANS_a_motorhome_parked_in_a_sky_resort_203bf5ce-5351-43b1-9241-71292e6be64c_upscaled.png': 'motorhome-ski-resort-2.png',
  
  // Animals
  'FURGOCASA_CAMPERVANS_a_wild_snow_cat_chasin_a_mouse_34e86f40-440a-4e48-8cf4-af3901a99add_upscaled.png': 'snow-cat-chasing-mouse.png',
  'FURGOCASA_CAMPERVANS_a_wild_snow_cat_60ca13d8-54d1-4c95-9184-3d795cbe8c76_upscaled.png': 'snow-cat.png',
  
  // Selfie filter
  'FURGOCASA_CAMPERVANS_selfie_of_a_person_using_a_filter_that_turn_the_ch_4cb17a8a-ff04-40c0-b970-569920c19ca5_upscaled.png': 'selfie-filter.png',
  
  // Various styles
  'DALL·E 2024-10-20 21.47.28 - An illustration of a Fiat Ducato H2 L3 camper van parked in a scenic nature setting, inspired by minimalist travel posters. The camper is situated bes.webp': 'camper-minimalist-poster.webp',
  'DALL·E 2024-10-20 21.47.26 - A cyberpunk-style digital illustration of a Fiat Ducato H2 L3 camper van. The vehicle is placed in a futuristic cityscape at night, surrounded by neon.webp': 'camper-cyberpunk.webp',
  'DALL·E 2024-10-20 21.47.24 - A 35mm photography shot of a Fiat Ducato H2 L3 camper van on a beach at sunset. The warm hues of the setting sun reflect off the vehicle, casting long.webp': 'camper-35mm-sunset.webp',
  'DALL·E 2024-10-20 21.47.21 - A manga-style depiction of a Fiat Ducato H2 L3 camper van in an animated road trip scene. The camper is speeding down a highway surrounded by colorful.webp': 'camper-manga-style.webp',
  
  // Monkey selfies
  'FURGOCASA_CAMPERVANS_cinematic_shot,_monkey_named_Volt_takes_selfies_wh_f5ecbf6a-4630-4ade-bd52-febe9b0c73c5.png': 'monkey-volt-selfie-1.png',
  'FURGOCASA_CAMPERVANS_cinematic_shot,_monkey_named_Volt_takes_selfies_wh_f7458824-be4b-463a-ac0a-1ca38a7bc1f1.png': 'monkey-volt-selfie-2.png',
};

// Función para renombrar archivos
function renameImages() {
  let renamed = 0;
  let errors = 0;
  let notFound = 0;

  console.log('🔄 Renombrando imágenes...\n');

  for (const [oldName, newName] of Object.entries(renameMap)) {
    const oldPath = path.join(imageDir, oldName);
    const newPath = path.join(imageDir, newName);

    try {
      if (fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPath);
        console.log(`✅ ${oldName}`);
        console.log(`   → ${newName}\n`);
        renamed++;
      } else {
        console.log(`⚠️  No encontrado: ${oldName}\n`);
        notFound++;
      }
    } catch (error) {
      console.log(`❌ Error renombrando: ${oldName}`);
      console.log(`   ${error.message}\n`);
      errors++;
    }
  }

  console.log('\n📊 RESUMEN:');
  console.log(`✅ Renombrados: ${renamed}`);
  console.log(`⚠️  No encontrados: ${notFound}`);
  console.log(`❌ Errores: ${errors}`);
  console.log(`📁 Total procesados: ${Object.keys(renameMap).length}`);
}

// Ejecutar
renameImages();

