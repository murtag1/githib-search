export interface RepoInfoType {
  name: string
  url: string
  stars: number
  watchers: number
}

export interface StoreType {
  searchInputFocused: boolean
  isLoading: boolean
  repos: RepoInfoType[] | []
}

export interface ActionType {
  type: string
  isLoading?: boolean
  reposList?: RepoInfoType[] | []
  searchInputFocused?: boolean
  reposName?: string
}

export interface FullReposType {
  name: string
  html_url: string
  stargazers_count: number
  watchers_count: number
}
