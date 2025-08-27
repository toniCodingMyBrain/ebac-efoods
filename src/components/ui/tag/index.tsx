import * as S from "./style";

type TagProps = {
  children: string;
};

export const CardTag = ({ children }: TagProps) => (
  <S.TagContainer>
    <S.TagText>{children}</S.TagText>
  </S.TagContainer>
);
