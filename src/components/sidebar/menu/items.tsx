import { SideBarItems } from "../types";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import MovieFilterOutlinedIcon from "@material-ui/icons/MovieFilterOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import VideoLibraryOutlinedIcon from "@material-ui/icons/VideoLibraryOutlined";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";

export const sidebarData: SideBarItems[] = [
  {
    name: "Home",
    icon: <HomeOutlinedIcon fontSize="small" />,
    link: "/",
  },
  {
    name: "Favorites",
    icon: <FavoriteBorderOutlinedIcon fontSize="small" />,
    link: "/favorites",
  },
  {
    name: "New releases",
    icon: <MovieFilterOutlinedIcon fontSize="small" />,
    link: "/new-releases",
  },
  {
    name: "Recently watched",
    icon: <WatchLaterOutlinedIcon fontSize="small" />,
    link: "/recently-watched",
  },
  {
    name: "Own collection",
    icon: <VideoLibraryOutlinedIcon fontSize="small" />,
    link: "/collection",
  },
];
