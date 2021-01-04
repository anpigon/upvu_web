import React, {Component} from "react";

import contributors from "../../constants/contributors.json";
import ProfileLink from "../profile-link";
import UserAvatar from "../user-avatar";

import {History} from "history";
import {Global} from "../../store/global/types";
import {Account} from "../../store/accounts/types";
import {_t} from "../../i18n";
import _c from "../../util/fix-class-names";
import {syncSvg} from "../../img/svg";

interface Props {
    history: History;
    global: Global;
    addAccount: (data: Account) => void;
}

export class Contributors extends Component<Props> {
    render() {
        return (
            <div className="contributors">
                <div className="contributors-list">
                    <div className="list-header">
                        <div className="list-title">
                            {_t('contributors.title')}
                        </div>
                        <div className="list-description">{_t('contributors.description')}</div>
                    </div>
                    <div className="list-body">
                        {contributors.map(c => {
                            const username = c.name;
                            return <div className="list-item" key={username}>
                                <div className="item-main">
                                    {ProfileLink({
                                        ...this.props,
                                        username,
                                        children: <>{UserAvatar({...this.props, username, size: "small"})}</>
                                    })}

                                    <div className="item-info">
                                        {ProfileLink({
                                            ...this.props,
                                            username,
                                            children: <a className="item-name notransalte">{username}</a>
                                        })}
                                    </div>
                                </div>
                                <div className="item-extra">
                                    {c.contributes.join(", ")}
                                </div>
                            </div>
                        })}

                    </div>
                </div>
            </div>
        );
    }
}

export default (p: Props) => {
    const props = {
        history: p.history,
        global: p.global,
        addAccount: p.addAccount
    }

    return <Contributors {...props} />
}
