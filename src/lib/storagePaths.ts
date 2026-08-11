import { slugify } from './slugify'

export const menuImagePath = (category: string, item: string, fileName: string, timestamp = Date.now()) => `menu-images/${slugify(category)}/${slugify(item)}/${timestamp}-${fileName}`
