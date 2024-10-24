import style from './ProfileInfo.module.css';
import bg from '../../../img/gallery.jpg';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {
    // console.log(props)
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div className={style.wrapper}>
            <img className={style.content__bg} src={ props.profile.photos.large ? props.profile.photos.large : bg }></img>
            <div className={style.content}>
                <h2 className={style.fullName}>{props.profile.fullName}</h2>
                <ProfileStatus status={'Hello friends!'}/>
                <p className={style.aboutMe}>{props.profile.aboutMe}</p>
                <i>{props.profile.lookingForAJob ? 'В поисках работы...' : 'Работу не ищу'}</i>
                <p>({props.profile.lookingForAJobDescription})</p>
                <h4>My contacts:</h4>
                <ul className={style.list}>
                    <li className={`${style.item} ${style.itemGit}`}>{props.profile.contacts.github}</li>
                    <li className={`${style.item} ${style.itemVK}`}>{props.profile.contacts.vk}</li>
                    <li className={`${style.item} ${style.itemYoutube}`}>{props.profile.contacts.youtube}</li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileInfo;
