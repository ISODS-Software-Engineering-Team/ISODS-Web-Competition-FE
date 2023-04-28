import {
    FaHome,
    FaTrophy,
    FaRegChartBar,
    FaCodeBranch,
    FaCode,
    FaRegCommentAlt
} from "react-icons/fa";

const CompetitionData = [
    {
        path: "/Home",
        name: "Home",
        icon: <FaHome />
    },
    {
        path: "/",
        name: "Competition",
        icon: <FaTrophy />
    },
    {
        path: "/datasets",
        name: "Datasets",
        icon: <FaRegChartBar />
    },
    {
        path: "/modelst",
        name: "Models",
        icon: <FaCodeBranch />
    },
    {
        path: "/Code",
        name: "Code",
        icon: <FaCode />
    },
    {
        path: "/discussion",
        name: "Discussions",
        icon: <FaRegCommentAlt />
    }
];

export default CompetitionData;
