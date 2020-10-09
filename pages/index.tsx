import Typography from '@material-ui/core/Typography';

import BackgroundVideo from '../src/components/BackgroundVideo';

const IndexPage = () => {
  return (
    <>
      <section className='hero'>
        <Typography variant='h3' component='h1' color='inherit'>
          <b>There should be a video playing</b>
        </Typography>

        <BackgroundVideo
          video='/assets/video/bg-video.mp4'
          poster='https://via.placeholder.com/1920x1080'
        />
      </section>

      <section style={{ height: '300vh' }}></section>
    </>
  );
};

export default IndexPage;
