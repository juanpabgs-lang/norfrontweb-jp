import markPng from "@/assets/norfront-mark.png";

interface NorfrontMarkProps {
  className?: string;
}

// The exact Norfront mark, cropped pixel-for-pixel from the brand lockup.
// White artwork on transparent — made for the site's black surfaces.
export function NorfrontMark({ className }: NorfrontMarkProps) {
  return <img src={markPng} alt="" aria-hidden="true" className={className} />;
}
