import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import html2canvas from "html2canvas";

import logo from "../assets/img/logo.jpg";
import Bg1 from "../assets/img/e-template07.png";
import Sticker01 from "../assets/img/e-stickers01.png";
import Sticker02 from "../assets/img/e-stickers02.png";
import Sticker03 from "../assets/img/e-stickers04.png";
import Sticker04 from "../assets/img/e-stickers06.png";
import Sticker05 from "../assets/img/e-stickers07.png";

import Sticker from "./Sticker";
import { getMobileOperatingSystem } from "../utils";

import "./EditScreen.scss";

const stickers = [Sticker01, Sticker02, Sticker03, Sticker04, Sticker05];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const fonts = ["Josefin Sans", "Fantasy", "Dancing Script", "ZCOOL XiaoWei"];

export default function EditScreen() {
  let history = useHistory();
  let query = useQuery();
  const [font, setfont] = useState("Dancing Script");
  const [theme, settheme] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [editItem, setEditItem] = useState<any>(null);
  const [target, setTarget] = useState<any>();
  const [moveAble, setmoveAble] = useState<Array<any>>([]);
  const [listText, setlistText] = useState<Array<any>>([]);

  useEffect(() => {
    const themeId = query.get("card");
    let theme;

    try {
      theme = require(`../assets/img/e-template${themeId}.png`).default || "";
    } catch (error) {
      theme = Bg1;
    }

    settheme(theme);
  }, [query]);

  const handleAdd = (event: any, text?: any) => {
    if (text) {
      setIsEdit(true);
      setEditItem(text);
      setTarget(event.target);
    } else {
      setTarget(event.target);
    }
  };

  const listSticker = useMemo(() => {
    return stickers.map((item, itemIdx) => {
      return (
        <div
          className="sticker"
          key={itemIdx}
          onClick={() => {
            const newArr: Array<any> = JSON.parse(JSON.stringify(moveAble));
            newArr.push(item);

            setmoveAble(newArr);
          }}
        >
          <img src={item} alt="" />
        </div>
      );
    });
  }, [stickers, moveAble]);

  const listMoveAble = useMemo(() => {
    return moveAble.map((item, itemIdx) => {
      return (
        <div className="move-able-item" key={itemIdx} onClick={handleAdd}>
          <img src={item} alt="" />
        </div>
      );
    });
  }, [moveAble]);

  const listTexts = useMemo(() => {
    return listText.map((item, itemIdx) => {
      return (
        <div
          className="move-able-item"
          style={{ left: 150, top: 150, fontFamily: font }}
          key={itemIdx}
          onClick={(e) => handleAdd(e, item)}
        >
          <p>{item.text}</p>
        </div>
      );
    });
  }, [listText, font]);

  const addText = () => {
    const newArr: Array<any> = JSON.parse(JSON.stringify(listText));
    const id = listText[listText?.length - 1]?.id + 1 || 1;

    newArr.push({
      id: id,
      type: "text",
      text: "Your text",
    });

    setlistText(newArr);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setEditItem({
      ...editItem,
      text: value,
    });

    const newListText = listText.map((item) => {
      if (item.id === editItem.id) {
        item.text = value;
      }

      return item;
    });

    setlistText(newListText);
  };

  const handleChangeFont = () => {
    let index = fonts.indexOf(font);

    if (index === fonts.length - 1) {
      index = 0;
    } else {
      index++;
    }

    setfont(fonts[index]);
  };

  const exportImg = async () => {
    await setTarget(null);
    const div: any = document.getElementById("content");
    let y, x;

    if (getMobileOperatingSystem() === "iOS") {
      x = 10;
      y = 380;
    } else if (getMobileOperatingSystem() === "Android") {
      x = (div as HTMLElement).clientWidth + 30;
      y = (div as HTMLElement).offsetHeight + 40;
    } else {
      y = 580;
    }

    return html2canvas(div, {
      scale: 1,
      width: (div as HTMLElement).clientWidth,
      height: div.clientHeight,
      y: y,
    }).then((canvas) => canvas.toDataURL("image/png"));
  };

  return (
    <div className="edit-screen">
      <div className="edit-screen__header">
        <div className="edit-screen__header__content container">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="edit-screen__main">
          <h5>Step 2: Choose your e-Sticker/s</h5>
          <div className="card-content">
            <div className="list-sticker">{listSticker}</div>
            <div className="theme-content" id="content">
              <Sticker target={target} />
              <img src={theme} alt="" />
              <div className="theme-content__container">
                {listMoveAble}
                {listTexts}
              </div>
            </div>
          </div>

          <div className="edit-screen__main--button custom-input">
            <div
              className="locale"
              style={{ fontFamily: font }}
              onClick={handleChangeFont}
            >
              Aa
            </div>
            {!isEdit ? (
              <div
                className="text-input"
                style={{ fontFamily: font }}
                onClick={addText}
              >
                Click to enter text
              </div>
            ) : (
              <input
                className="text-input"
                type="text"
                style={{ fontFamily: font }}
                value={editItem?.text || ""}
                onChange={handleChange}
                onBlur={() => {
                  setIsEdit(false);
                  setTarget(null);
                }}
              />
            )}
          </div>
          <button
            className="edit-screen__main--button"
            onClick={async () => {
              const img = await exportImg();

              history.push("tks-screen", { img });
            }}
          >
            Click to complele
          </button>
        </div>
      </div>
    </div>
  );
}
