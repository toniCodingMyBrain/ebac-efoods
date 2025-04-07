import { TagContainer, TagText } from "./style";

type TagProps = {
  children: string;
};

export const CardTag = ({ children }: TagProps) => (
  <TagContainer>
    <TagText>{children}</TagText>
  </TagContainer>
);
