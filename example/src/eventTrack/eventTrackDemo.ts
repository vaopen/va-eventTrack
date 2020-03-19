import { Events } from './eventTrackEnum';

const Mapped = {
  pastpaperAdClose: (opts?: any) => {
    return {
      actionId: 'pastpaper-ad-close',
      fromPageName: '首页',
      event: Events.Close,
      description: '首页广告关闭弹窗',
      ...opts
    }
  },
};

export default Mapped;
