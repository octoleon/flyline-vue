const filenames = ["Header_Image.png"];

export function getRandomImage() {
  const randFilename = filenames[Math.floor(Math.random() * filenames.length)];
  return require(`@/assets/photo_bank/${randFilename}`);
}
