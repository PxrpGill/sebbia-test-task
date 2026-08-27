import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Link, Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, useSearchParams } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { cache } from "react";
import axios from "axios";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/.pnpm/@react-router+dev@8.3.0_@react-router+serve@8.3.0_react-router@8.3.0_react-dom@19.2.8_r_b84fe289acbf6a576dda4dc8bc272491/node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), 6e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
//#region src/app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	ErrorBoundary: () => ErrorBoundary,
	Layout: () => Layout,
	default: () => root_default
});
var queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 1e4 } } });
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "ru",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx("title", { children: "Тестовое задание для компании Sebbia" }),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", { children: [
			children,
			/* @__PURE__ */ jsx(ScrollRestoration, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsx(Outlet, {})
	});
});
var ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary({ error }) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack;
	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
	}
	return /* @__PURE__ */ jsxs("main", {
		style: { padding: "2rem" },
		children: [
			/* @__PURE__ */ jsx("h1", { children: message }),
			/* @__PURE__ */ jsx("p", { children: details }),
			stack
		]
	});
});
//#endregion
//#region src/shared/api/api-urls.ts
var API_URLS = {
	getCategories: "/news/categories",
	getNewsByCategory: (newsId) => `/news/categories/${newsId}/news`,
	getNewsDetails: "/news/details"
};
var apiInstance = axios.create({
	baseURL: "https://testtask.sebbia.com/v1",
	timeout: 3e4
});
//#endregion
//#region src/features/news-categories/api/get-news-categories.ts
var getNewsCategories = cache(async () => {
	return (await apiInstance.get(API_URLS.getCategories)).data;
});
//#endregion
//#region src/shared/ui/app-link/index.tsx
var AppLink = ({ children, ...props }) => {
	return /* @__PURE__ */ jsx(Link, {
		...props,
		children
	});
};
var index_module_default$6 = { root: "_root_7kx53_1" };
//#endregion
//#region src/shared/ui/button/index.tsx
var Button = ({ children, className = "", ...props }) => {
	return /* @__PURE__ */ jsx("button", {
		className: `${index_module_default$6.root} ${className}`.trim(),
		...props,
		children
	});
};
var index_module_default$5 = {
	root: "_root_1dgxj_1",
	loader: "_loader_1dgxj_8",
	button: "_button_1dgxj_13",
	active: "_active_1dgxj_13"
};
//#endregion
//#region src/features/news-categories/ui/index.tsx
var NewsCategories = ({ className, list }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const currentCategory = searchParams.get("categoryId");
	const handleButtonClick = (categoryId) => {
		setSearchParams({ categoryId: String(categoryId) });
	};
	return /* @__PURE__ */ jsx("div", {
		className: `${index_module_default$5.root} ${className}`,
		children: list?.map((category, index) => /* @__PURE__ */ jsx(Button, {
			onClick: () => handleButtonClick(category.id),
			className: `${index_module_default$5.button} ${category.id === Number(currentCategory) && index_module_default$5.active}`,
			children: category.name
		}, index))
	});
};
var index_module_default$4 = {
	title: "_title_1f4sv_1",
	categories: "_categories_1f4sv_6"
};
//#endregion
//#region src/shared/lib/format-date.ts
var formatDate = (date) => {
	const d = typeof date === "string" ? new Date(date) : date;
	return new Intl.DateTimeFormat("ru-RU").format(d);
};
var index_module_default$3 = {
	root: "_root_16qhn_1",
	title: "_title_16qhn_20",
	shortDescription: "_shortDescription_16qhn_25",
	date: "_date_16qhn_30",
	link: "_link_16qhn_36"
};
//#endregion
//#region src/entities/news/ui/news-card/index.tsx
var NewsCard = ({ title, date, shortDescription, className, id }) => {
	return /* @__PURE__ */ jsxs("article", {
		className: `${index_module_default$3.root} ${className}`,
		children: [
			title && /* @__PURE__ */ jsx("h4", {
				dangerouslySetInnerHTML: { __html: title },
				className: index_module_default$3.title
			}),
			shortDescription && /* @__PURE__ */ jsx("div", {
				dangerouslySetInnerHTML: { __html: shortDescription },
				className: index_module_default$3.shortDescription
			}),
			date && /* @__PURE__ */ jsx("time", {
				dateTime: date,
				className: index_module_default$3.date,
				children: formatDate(date)
			}),
			id && /* @__PURE__ */ jsx(AppLink, {
				to: `/news/${id}`,
				className: index_module_default$3.link
			})
		]
	});
};
//#endregion
//#region src/entities/news/api/get-news-details.ts
var getNewsDetails = cache(async (id) => {
	return (await apiInstance.get(API_URLS.getNewsDetails, { params: { id } })).data;
});
//#endregion
//#region src/widgets/news-section/api/get-news-by-category.ts
var getNewsByCategory = cache(async (categoryId) => {
	return (await apiInstance.get(API_URLS.getNewsByCategory(categoryId))).data;
});
//#endregion
//#region src/widgets/news-section/hooks/use-get-news-by-category.tsx
var useGetNewsByCategory = (categoryId) => {
	return useQuery({
		queryKey: ["news", categoryId],
		queryFn: () => getNewsByCategory(categoryId),
		enabled: !!categoryId
	});
};
var index_module_default$2 = {
	list: "_list_1jja3_1",
	newsCard: "_newsCard_1jja3_14",
	loading: "_loading_1jja3_21",
	empty: "_empty_1jja3_22"
};
//#endregion
//#region src/widgets/news-section/ui/news-list/index.tsx
var NewsList = () => {
	const [searchParams] = useSearchParams();
	const { data, isLoading } = useGetNewsByCategory(searchParams.get("categoryId") ?? "0");
	return /* @__PURE__ */ jsx("div", {
		className: index_module_default$2.root,
		children: isLoading ? /* @__PURE__ */ jsx("div", {
			className: index_module_default$2.loading,
			children: "Загружаем контент"
		}) : /* @__PURE__ */ jsx(Fragment, { children: data?.list?.length ? /* @__PURE__ */ jsx("ul", {
			className: index_module_default$2.list,
			children: data?.list?.map((news, newsKey) => /* @__PURE__ */ jsx("li", {
				className: index_module_default$2.paragraph,
				children: /* @__PURE__ */ jsx(AppLink, {
					to: `/news/${news.id}`,
					children: /* @__PURE__ */ jsx(NewsCard, {
						...news,
						className: index_module_default$2.newsCard
					})
				})
			}, `${news.id}-${newsKey}`))
		}) : /* @__PURE__ */ jsx("div", {
			className: index_module_default$2.empty,
			children: "Извините, но в этой категории нет новостей"
		}) })
	});
};
//#endregion
//#region src/widgets/news-section/ui/index.tsx
var NewsSection = ({ title, className, list }) => {
	return /* @__PURE__ */ jsxs("section", {
		className: `${index_module_default$4.root} ${className} container`.trim(),
		children: [
			title && /* @__PURE__ */ jsx("h1", {
				dangerouslySetInnerHTML: { __html: title },
				className: index_module_default$4.title
			}),
			/* @__PURE__ */ jsx(NewsCategories, {
				className: index_module_default$4.categories,
				list
			}),
			/* @__PURE__ */ jsx(NewsList, {})
		]
	});
};
var index_module_default$1 = { root: "_root_1d1i1_1" };
//#endregion
//#region src/pages/home-page/ui/index.tsx
var HomePage = ({ list }) => {
	return /* @__PURE__ */ jsx("main", {
		className: index_module_default$1.root,
		children: /* @__PURE__ */ jsx(NewsSection, {
			title: "Лента новостей",
			list
		})
	});
};
//#endregion
//#region src/app/routes/home.tsx
var home_exports = /* @__PURE__ */ __exportAll({
	default: () => home_default,
	loader: () => loader$1
});
async function loader$1() {
	return await getNewsCategories();
}
var home_default = UNSAFE_withComponentProps(function Home({ loaderData }) {
	const { list } = loaderData;
	return /* @__PURE__ */ jsx(HomePage, { list });
});
var index_module_default = {
	root: "_root_1lb4s_1",
	loading: "_loading_1lb4s_4",
	article: "_article_1lb4s_11",
	title: "_title_1lb4s_15",
	date: "_date_1lb4s_24",
	content: "_content_1lb4s_30"
};
//#endregion
//#region src/pages/news-detail-page/ui/index.tsx
var NewsDetailPage = ({ news }) => {
	return /* @__PURE__ */ jsx("main", {
		className: `${index_module_default.root} container`,
		children: news && /* @__PURE__ */ jsxs("article", {
			className: index_module_default.article,
			children: [
				news.title && /* @__PURE__ */ jsx("h1", {
					className: index_module_default.title,
					dangerouslySetInnerHTML: { __html: news.title }
				}),
				news.date && /* @__PURE__ */ jsx("time", {
					dateTime: news.date,
					className: index_module_default.date,
					children: formatDate(news.date)
				}),
				news.fullDescription && /* @__PURE__ */ jsx("div", {
					className: index_module_default.content,
					dangerouslySetInnerHTML: { __html: news.fullDescription }
				})
			]
		})
	});
};
//#endregion
//#region src/app/routes/news-detail.tsx
var news_detail_exports = /* @__PURE__ */ __exportAll({
	default: () => news_detail_default,
	loader: () => loader
});
async function loader({ params }) {
	return await getNewsDetails(Number(params.id));
}
var news_detail_default = UNSAFE_withComponentProps(function NewsDetail({ loaderData }) {
	const { news } = loaderData;
	return /* @__PURE__ */ jsx(NewsDetailPage, { news });
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-C7t_z7pX.js",
		"imports": ["/assets/jsx-runtime-BTzqmuUK.js", "/assets/errorBoundaries-DxaD09HJ.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": true,
			"module": "/assets/root-Dp7BkN80.js",
			"imports": [
				"/assets/jsx-runtime-BTzqmuUK.js",
				"/assets/errorBoundaries-DxaD09HJ.js",
				"/assets/query-DrVHZi2J.js"
			],
			"css": ["/assets/root-CJnnVQy9.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home": {
			"id": "routes/home",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/home-mllswb-i.js",
			"imports": [
				"/assets/jsx-runtime-BTzqmuUK.js",
				"/assets/query-DrVHZi2J.js",
				"/assets/format-date-C8wpKU2X.js",
				"/assets/errorBoundaries-DxaD09HJ.js"
			],
			"css": ["/assets/home-x-afTUSF.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/news-detail": {
			"id": "routes/news-detail",
			"parentId": "root",
			"path": "news/:id",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/news-detail-_5UWTvIm.js",
			"imports": ["/assets/jsx-runtime-BTzqmuUK.js", "/assets/format-date-C8wpKU2X.js"],
			"css": ["/assets/news-detail-DH-3xbts.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-4c017856.js",
	"version": "4c017856",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build/client";
var basename = "/";
var future = {
	"unstable_enableNodeReadableStream": false,
	"unstable_optimizeDeps": false
};
var ssr = true;
var isSpaMode = false;
var prerender = [];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"routes/home": {
		id: "routes/home",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	},
	"routes/news-detail": {
		id: "routes/news-detail",
		parentId: "root",
		path: "news/:id",
		index: void 0,
		caseSensitive: void 0,
		module: news_detail_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
