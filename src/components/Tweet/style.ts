import styled from 'styled-components';
import { RocketseatIcon as Rocketseat} from '../../styles/icons';

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 text-align: left;

 padding: 14px 16px;

 border-bottom: 1px solid var(--outline);

 max-width: 100%;
`;

export const RocketseatIcon = styled(Rocketseat)`
    width: 16px;
    height: 16px; 

    margin-left: 35px; 
    margin-right: 9px;

    > path {
        color: var(--gray);
    }
`;

export const Retweeted = styled.div`
    display: flex;
    align-items: center;

    font-size: 13px;
    color: var(--gray);
`;

export const Body = styled.div`
    display: flex;
    margin-top: 3px;

    position: relative;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-top: 2px;
    padding-left: 59px;
`;

export const Avatar = styled.div`
    width: 49px;
    height: 49px;
    border-radius: 50%;
    flex-shrink: 0;
    background: var(--gray);

    position: absolute;
    top: 0;
    left: 0;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;

    font-size: 15px;
    white-space: nowrap;

    > strong {
        margin-right: 5px;
    }

    > span, time {
        color: var(--gray);
    }

    > span, strong {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;

export const Description = styled.p`
    font-size: 14px;
    margin-top: 4px;
`;

export const Dot = styled.div`
    background: var(--gray);
    width: 2px;
    height: 2px;
    margin: 0 10px;
`;
export const ImageContent = styled.div`
    margin-top: 12px;
    width: 100%;
    height: min(280px, max(170px, 41vw));

    background: var(--outline);
    border-radius: 14px;
    cursor: pointer;
    &:hover {
        opacity: .7;
    }
`;
export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 12px;

    flex-wrap: wrap;
    margin: 11px auto 0;
    width: 100%; /**Mobile */

    @media (min-width: 330px) {
        width: 63%; /** Tablet */
    }

    > div {
        cursor: pointer;

        &:hover {
            opacity: .7;
        }
    }
`;

export const Status = styled.div`
   > i {
       font-size: 14px;  
       margin-right: 5px; 
   }

   &:nth-child(1) {
        &, > i {
            color: var(--gray);
        }
   }

   &:nth-child(2) {
        &, i {
            color: var(--retweet);
        }
   }

   &:nth-child(3) {
        &, > i {
            color: var(--like);
        }
   }
`;