import style from "./Profile.module.css";

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div class={style.profile}>
      <div class={style.description}>
        <img src={avatar} alt="User avatar" class={style.avatar} />
        <p class={style.name}>{username}</p>
        <p class={style.tag}>@{tag}</p>
        <p class={style.location}>{location}</p>
      </div>
      <ul class={style.stats}>
        <li class={style.stats__item}>
          <span class={style.label}>Followers</span>
          <span class="quantity">{stats.followers}</span>
        </li>
        <li class={style.stats__item}>
          <span class={style.label}>Views</span>
          <span class="quantity">{stats.views}</span>
        </li>
        <li class={style.stats__item}>
          <span class="label">Likes</span>
          <span class="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  )
}
