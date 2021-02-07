import { SideBarItems } from "../types";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import MovieFilterOutlinedIcon from "@material-ui/icons/MovieFilterOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import VideoLibraryOutlinedIcon from "@material-ui/icons/VideoLibraryOutlined";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";

export const sidebarData: SideBarItems[] = [
  {
    name: "Home",
    icon: <HomeOutlinedIcon />,
    link: "/",
  },
  {
    name: "Favorites",
    icon: <FavoriteBorderOutlinedIcon fontSize="small" />,
    link: "/favorites",
  },
  {
    name: "New Releases",
    icon: <MovieFilterOutlinedIcon fontSize="small" />,
    link: "/new-releases",
  },
  {
    name: "Recently Watched",
    icon: <WatchLaterOutlinedIcon fontSize="small" />,
    link: "/recently-watched",
  },
  {
    name: "Own Collection",
    icon: <VideoLibraryOutlinedIcon fontSize="small" />,
    link: "/collection",
  },
];
