import { useState } from "react";
import avatarBear from "../../assets/avatars/avatar_bear.webp";
import avatarDog from "../../assets/avatars/avatar_dog.webp";
import avatarGreen from "../../assets/avatars/avatar_gamer_green.webp";
import avatarPink from "../../assets/avatars/avatar_gamer_pink.webp";
import avatarGiraffe from "../../assets/avatars/avatar_giraffe.webp";
import avatarGorilla from "../../assets/avatars/avatar_gorilla.webp";
import avatarRabbit from "../../assets/avatars/avatar_rabbit.webp";
import avatarWalrus from "../../assets/avatars/avatar_walrus.webp";
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
              width="60px"
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
