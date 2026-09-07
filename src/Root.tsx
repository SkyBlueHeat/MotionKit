import {Composition} from 'remotion';
import {TitleDemo} from './compositions/TitleDemo';
import {LowerThirdDemo} from './compositions/LowerThirdDemo';
import {ChartDemo} from './compositions/ChartDemo';
import {TransitionDemo} from './compositions/TransitionDemo';
import {ProductPromo} from './compositions/ProductPromo';
import {CreatorStats} from './compositions/CreatorStats';
import {VerticalDemo} from './compositions/VerticalDemo';
import {CreatorExplainerShowcase} from './compositions/CreatorExplainerShowcase';
import {DataDrivenExplainer} from './compositions/DataDrivenExplainer';
import {MotionKitShowreel} from './compositions/MotionKitShowreel';
import {ComponentPlayground} from './compositions/ComponentPlayground';
import {saasAnalyticsPreset, creatorGrowthPreset, productLaunchPreset} from './data/presets';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="TitleDemo"
        component={TitleDemo}
        durationInFrames={120}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="LowerThirdDemo"
        component={LowerThirdDemo}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="ChartDemo"
        component={ChartDemo}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TransitionDemo"
        component={TransitionDemo}
        durationInFrames={240}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="ProductPromo"
        component={ProductPromo}
        durationInFrames={450}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="CreatorStats"
        component={CreatorStats}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          creatorName: "Alex",
          followersBefore: 12500,
          followersAfter: 48700,
          views: 1200000,
          engagement: 8.4,
        }}
      />
      <Composition
        id="VerticalDemo"
        component={VerticalDemo}
        durationInFrames={180}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="CreatorExplainerShowcase"
        component={CreatorExplainerShowcase}
        durationInFrames={1350}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="SaaSPreset"
        component={DataDrivenExplainer}
        durationInFrames={1350}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={saasAnalyticsPreset}
      />
      <Composition
        id="CreatorPreset"
        component={DataDrivenExplainer}
        durationInFrames={1350}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={creatorGrowthPreset}
      />
      <Composition
        id="ProductPreset"
        component={DataDrivenExplainer}
        durationInFrames={1350}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={productLaunchPreset}
      />
      <Composition
        id="MotionKitShowreel"
        component={MotionKitShowreel}
        durationInFrames={1200}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
