import { BotConfig } from './structures/types'; 

export const config: BotConfig = {
    groupId: 5999767,
    slashCommands: true,
    legacyCommands: {
        enabled: true,
        prefixes: ['q!'],
    },
    permissions: {
        all: [''],
        ranking: [''],
        users: [''],
        shout: [''],
        join: [''],
        signal: [''],
        admin: [''],
    },
    logChannels: {
        actions: '1021794184618856498',
        shout: '',
    },
    database: {
        enabled: true,
        type: 'mongodb',
    },
    api: false,
    maximumRank: 255,
    verificationChecks: true,
    firedRank: 1,
    suspendedRank: 3,
    recordManualActions: true,
    memberCount: {
        enabled: false,
        channelId: '',
        milestone: 100,
        onlyMilestones: false,
    },
    xpSystem: {
        enabled: false,
        autoRankup: false,
        roles: [
            /* Example:
            {
                rank: 3,
                xp: 30,
            },
            */
        ],
    },
    antiAbuse: {
        enabled: true,
        clearDuration: 1 * 60,
        threshold: 6,
        demotionRank: 3,
        bypassRoleId: '',
    },
    activity: {
        enabled: true,
        type: 'WATCHING',
        value: 'SpeedKarting SHR',
    },
    status: 'online',
    deleteWallURLs: false,
}
