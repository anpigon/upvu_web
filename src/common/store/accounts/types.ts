export interface AccountProfile {
  about?: string;
  cover_image?: string;
  location?: string;
  name?: string;
  profile_image?: string;
  website?: string;
}

export interface AccountFollowStats {
  follower_count: number;
  following_count: number;
}

export interface Account {
  name: string;

  post_count?: number;
  created?: string;
  reputation?: string;
  json_metadata?: string;
  vesting_shares?: string;
  delegated_vesting_shares?: string;
  received_vesting_shares?: string;
  vesting_withdraw_rate?: string;
  to_withdraw?: string | number;
  withdrawn?: string | number;
  voting_manabar?: {
    current_mana: string | number;
    last_update_time: number;
  };

  profile?: AccountProfile;
  follow_stats?: AccountFollowStats;

  __loaded?: boolean;
}

export type State = Account[];

export enum ActionTypes {
  ADD = "@accounts/ADD",
}

export interface AddAction {
  type: ActionTypes.ADD;
  data: Account;
}

export type Actions = AddAction; // | .. | ..