import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('image') as File
    
    if (!file) {
      return NextResponse.json({ error: 'No se proporcionó ningún archivo' }, { status: 400 })
    }

    // Convertir el archivo a buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Generar nombre único
    const timestamp = Date.now()
    const ext = file.name.split('.').pop()
    const fileName = `${formData.get('slug') || 'image'}-${timestamp}.${ext}`

    // Guardar en /public/blog/
    const path = join(process.cwd(), 'public', 'blog', fileName)
    await writeFile(path, buffer)

    console.log('✅ Imagen guardada en:', path)

    return NextResponse.json({ 
      success: true, 
      fileName,
      url: `/blog/${fileName}`
    })
  } catch (error: any) {
    console.error('❌ Error uploading image:', error)
    return NextResponse.json({ 
      error: error.message || 'Error al subir la imagen' 
    }, { status: 500 })
  }
}

