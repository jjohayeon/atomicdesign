import React from "react";
import styled from "styled-components";
import Text from "../Atoms/Text";
import SearchBar from "../Molecules/SearchBar";

const styledComp = {
  HeaderContainer: styled.header`
    border-bottom: 2px solid #010101;
  `,
  Navigation: styled.nav`
    height: 80px;
    display: flex;
    justify-content: space-between;
  `,
  Content: styled.div`
    width: 100%;
    padding: 0 4vw;
    display: flex;
    justify-content: space-between;
  `,
  NavigationSection: styled.nav`
    justify-content: flex-start;
    display: flex;
    align-items: center;
    flex: 1;
  `,
  ItemSection: styled.ul`
    justify-content: flex-start;
    display: flex;
    flex: 1;
  `,
  Item: styled.li`
    position: relative;
    width: auto;
    list-style: none;
    padding: 1rem;
  `,
  SearchSection: styled.a`
    display: inline-block;
    white-space: nowrap;
    flex-basis: auto;
    width: auto;
  `,
  MenuText: styled(Text)`
    font-weight: bold;
  `,
};

export default function Header({ onChange, onClick }) {
  return (
    <styledComp.HeaderContainer>
      <styledComp.Navigation>
        <styledComp.Content>
          <styledComp.NavigationSection>
            <styledComp.ItemSection>
              <styledComp.Item>
                <styledComp.MenuText type={"large"} value={"Home"} />
              </styledComp.Item>
              <styledComp.Item>
                <styledComp.MenuText type={"large"} value={"About"} />
              </styledComp.Item>
              <styledComp.Item>
                <styledComp.MenuText type={"large"} value={"Blog"} />
              </styledComp.Item>
              <styledComp.Item>
                <styledComp.MenuText type={"large"} value={"Contact"} />
              </styledComp.Item>
            </styledComp.ItemSection>
            <styledComp.SearchSection>
              <SearchBar onChange={onChange} onClick={onClick} />
            </styledComp.SearchSection>
          </styledComp.NavigationSection>
        </styledComp.Content>
      </styledComp.Navigation>
    </styledComp.HeaderContainer>
  );
}
