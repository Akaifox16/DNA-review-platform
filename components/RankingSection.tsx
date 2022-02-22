import { OverrideSectionProps } from "../lib/type";
import SideSection from "./SideSection";

const RankingSection = ({ cardlist }: OverrideSectionProps) => {
    return (
        <SideSection name='Ranking' cardlist={cardlist} />
    );
}

export default RankingSection;