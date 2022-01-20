import * as S from "./style";

interface colorProps {
  color: string;
  className?: string;
}

export function Loading({color, className}: colorProps) {
  return (
    <S.Button color={color} className={className}>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </S.Button>
  );
}
