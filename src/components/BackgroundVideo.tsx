import { useEffect, useRef } from 'react';
import styles from '../styles/BackgroundVideo.module.css';
import Typography from '@material-ui/core/Typography';

interface Props {
  video: string;
  poster?: string;
}

const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf('safari') > -1 && ua.indexOf('chrome') < 0;
};

const BackgroundVideo = ({ video, poster }: Props) => {
  const videoRef = useRef<HTMLVideoElement>();

  // Added this effect to try and fix the bug but it doesn't help
  useEffect(() => {
    if (isSafari() && videoRef.current) {
      const player = videoRef.current;

      player.controls = false;
      player.muted = true;
      player.setAttribute('muted', ''); // just in case
      player.autoplay = true;
      player.setAttribute('playsinline', 'true');
      player.setAttribute('crossorigin', 'true');

      setTimeout(() => {
        // player.play() might return a promise but it's not guaranteed crossbrowser.
        const promise = player.play();
        // let's play safe to ensure that if we do have a promise
        if (promise.then) {
          promise.then(() => {}).catch(() => {});
        }
      }, 0);
    }
  }, []);

  return (
    <div className={styles['video--container']}>
      <video
        ref={videoRef as any}
        playsInline
        className={styles['video--source']}
        autoPlay
        loop
        muted
        poster={poster ? poster : undefined}
      >
        <source src={video} type='video/mp4' />
        <Typography variant='h3' color='textSecondary'>
          Your browser doesn't support MP4 videos.
        </Typography>
      </video>
    </div>
  );
};

export default BackgroundVideo;
