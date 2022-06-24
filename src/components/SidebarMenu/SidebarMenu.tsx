import * as S from './SidebarMenu.styles';
import { ChevronsLeft as ChevronLeftIcon, Settings as SettingsIcon } from '@styled-icons/feather';
import {
  QuestionCircle as QuestionCircleIcon,
  Board as BoardIcon
} from '@styled-icons/fluentui-system-regular';

import { Button } from 'components';

/**
 * Component that will be used as a menu in the app
 */
export default function SidebarMenu() {
  return (
    <S.Wrapper>
      <S.CollapseButton title='Collapse sidebar'>
        <ChevronLeftIcon />
      </S.CollapseButton>

      <S.Logo>
        <span className='blue'>React</span>
        <span className='secondary'>Trello</span>
      </S.Logo>

      <S.BoardsListWrapper>
        <S.BoardListLabel>Your boards</S.BoardListLabel>

        <S.BoardsList>
          <S.BoardsListItem>
            <a href='#'>
              <BoardIcon />
              Work
            </a>
          </S.BoardsListItem>

          <S.BoardsListItem>
            <a href='#'>
              <BoardIcon />
              Cool project
            </a>
          </S.BoardsListItem>

          <S.BoardsListItem>
            <a href='#'>
              <BoardIcon />
              iOS App
            </a>
          </S.BoardsListItem>
        </S.BoardsList>
      </S.BoardsListWrapper>

      <S.SecondaryOptions>
        <Button fullWidth icon={<QuestionCircleIcon />} minimal>
          Help
        </Button>

        <Button fullWidth icon={<SettingsIcon />} minimal>
          Settings
        </Button>
      </S.SecondaryOptions>
    </S.Wrapper>
  );
}
