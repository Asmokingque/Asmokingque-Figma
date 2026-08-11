export const isValidImageUpload = (size: number, type: string) => size <= 5 * 1024 * 1024 && ['image/jpeg', 'image/png', 'image/webp'].includes(type)
