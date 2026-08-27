import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('./routes/home.tsx'),
  route('news/:id', './routes/news-detail.tsx'),
] satisfies RouteConfig;
