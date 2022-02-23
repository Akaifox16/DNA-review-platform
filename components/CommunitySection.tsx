import { OverrideSectionProps, SideSectionProps } from "../lib/type";
import SideSection from "./SideSection";

const CommunitySection = ({ cardlist }: OverrideSectionProps) => {
    return (
        <SideSection name='Community' cardlist={cardlist} class="commu"/>
    );
}

export default CommunitySection;