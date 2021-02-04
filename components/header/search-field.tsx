import { FC, FormEvent, useState } from "react";
import styled from "styled-components";
import FlexContainer from "@/shared/flex-container";
import MaterialIcon from "@/shared/material-icon";
import { useRouter } from "next/router";

const SearchFieldContainer = styled(FlexContainer)`
  align-items: center;
  column-gap: 5px;
`;

const SearchFieldInput = styled.input``;

const FlippedIcon = styled(MaterialIcon)`
  transform: scale(-1, 1);
  transition: transform 100ms ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(-1.2, 1.2);
  }
`;

const SearchField: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    redirectSearch();
  };

  const redirectSearch = () => {
    if (searchTerm.length > 0) {
      router.push(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchFieldContainer>
        <FlippedIcon size={30} onClick={redirectSearch}>
          search
        </FlippedIcon>
        <SearchFieldInput
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchFieldContainer>
    </form>
  );
};

export default SearchField;
