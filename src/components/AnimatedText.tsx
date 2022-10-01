import { useSectionContext } from "../contexts/sectionContext";
import { useEffect, useState } from "react";

type Props = { text: String };

const buttonStages = [
    { text: "" },
    { text: "Projects" },
    { text: "Contacts" },
    { text: "To The Top" },
];

const AnimatedText = ({}: Props) => {
    const { currentSectionId } = useSectionContext();
    const [text, setText] = useState("");

    useEffect(() => {
        setText(buttonStages[currentSectionId].text);

        return () => {
            setText("");
        };
    }, [currentSectionId]);

    return <span>{text}</span>;
};

export default AnimatedText;
