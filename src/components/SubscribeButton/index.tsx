import style from './styles.module.scss';

interface SubscribeButttonProps{
  priceId: string;
}
export function SubscribeButton({ priceId }: SubscribeButttonProps){
  const isUserLoggedIn = true;
return(
    <button type="button" className={style.signInButton}>
      Subscribe now
   </button>
)
}