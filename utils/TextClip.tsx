export default function TextClip(text: string) {
  if (text.length < 20) {
    return text;
  } else {
    return text.substring(0, 15) + "...";
  }
}
