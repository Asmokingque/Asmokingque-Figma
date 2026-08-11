const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp']
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024

export default function ImageUploader() {
  return (
    <section>
      <h2>ImageUploader</h2>
      <p>Supported files: jpg, jpeg, png, webp. Max size: 5MB.</p>
      <small>Use storage paths like menu-images/{'{category-slug}'}/{'{item-slug}'}/{'{timestamp}'}-{'{file-name}'}</small>
      <pre>{JSON.stringify({ ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE_BYTES }, null, 2)}</pre>
    </section>
  )
}
