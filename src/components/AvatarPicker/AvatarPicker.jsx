import { useState } from "react";
import avatarBear from "../../assets/avatars/bear_60x60.webp";
import avatarDog from "../../assets/avatars/dog_60x60.webp";
import avatarGreen from "../../assets/avatars/panda_60x60.webp";
import avatarPink from "../../assets/avatars/shark_60x60.webp";
import avatarGiraffe from "../../assets/avatars/giraffe_60x60.webp";
import avatarGorilla from "../../assets/avatars/gorilla_60x60.webp";
import avatarRabbit from "../../assets/avatars/rabbit_60x60.webp";
import avatarWalrus from "../../assets/avatars/walrus_60x60.webp";
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
