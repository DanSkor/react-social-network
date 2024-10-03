import style from './ProfileInfo.module.css';
import bg from '../../../img/gallery.jpg';

const ProfileInfo = () => {
    return (
        <div>
            <img className={style.content__bg} src={bg}></img>
            <div>
                ava
            </div>
        </div>
    )
}

export default ProfileInfo;
