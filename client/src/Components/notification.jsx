import {
  NotificationCardBox,
  NotificationCard,
} from "../Styles/notificationCardStyles";
import { deleteNotification } from "../Redux/profile";
import { useDispatch } from "react-redux";

export default function Notification({ notificationsArray }) {
  const dispatch = useDispatch();
  return (
    <NotificationCardBox id="notifier">
      {!notificationsArray.length
        ? null
        : notificationsArray.map((message, index) => {
            return (
              <NotificationCard key={index} className="active">
                {message}
                <i
                  className="far fa-times-circle"
                  onClick={() => dispatch(deleteNotification(index))}
                ></i>
              </NotificationCard>
            );
          })}
    </NotificationCardBox>
  );
}
