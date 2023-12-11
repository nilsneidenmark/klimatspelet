import { useState } from "react";
import avatarBear from "../../assets/avatar_bear.webp";
import avatarDog from "../../assets/avatar_dog.webp";
import avatarGreen from "../../assets/avatar_gamer_green.webp";
import avatarPink from "../../assets/avatar_gamer_pink.webp";
import avatarGiraffe from "../../assets/avatar_giraffe.webp";
import avatarGorilla from "../../assets/avatar_gorilla.webp";
import avatarRabbit from "../../assets/avatar_rabbit.webp";
import avatarWalrus from "../../assets/avatar_walrus.webp";
import styles from "./avatarpicker.module.scss";

export default function AvatarPicker() {
  const avatars = [
    avatarBear,
    avatarDog,
    avatarGiraffe,
    avatarGorilla,
    avatarRabbit,
    avatarWalrus,
    avatarGreen,
    avatarPink,
  ];
  const [active, setActive] = useState(0);

  function handleClick(index) {
    setActive(index);
    event.preventDefault();
  }
  return (
    <div className={styles.avatarContainer}>
      <p>Välj avatar</p>
      <div>
        {avatars.map((avatar, index) => (
          <button key={index}>
            <img
              className={active === index ? styles.active : ""}
              width="50px"
              src={avatar}
              alt={`Avatar ${index}`}
              onClick={() => handleClick(index)}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
