import React from "react";
import "./SwipeButtons.css";
import ReplyIcon from "@material-ui/icons/Reply";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton>
        <ReplyIcon fontSize="large" className="swipeButtons__repeat" />
      </IconButton>

      <IconButton>
        <CloseIcon fontSize="large" className="swipeButtons__left" />
      </IconButton>

      <IconButton>
        <StarRateIcon fontSize="large" className="swipeButtons__star" />
      </IconButton>

      <IconButton>
        <FavoriteIcon fontSize="large" className="swipeButtons__right" />
      </IconButton>

      <IconButton>
        <FlashOnIcon fontSize="large" className="swipeButtons__lightning" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
