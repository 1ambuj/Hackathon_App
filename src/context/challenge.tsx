import React, { useContext, useState } from 'react';
import { IChallenge } from '../types/challenge';
import { nanoid } from 'nanoid'

type ChallengeContextT = {
    challenges: IChallenge[];
    saveChallenge: (challenge: Partial<IChallenge> & Omit<IChallenge, 'id'>) => void;
    deleteChallenge: (id: string) => void;
}

const initialState: Pick<ChallengeContextT, 'challenges'> = {
    challenges: [],
};

const ChallengeContext = React.createContext(initialState as ChallengeContextT);

type ChallengeContextProviderProps = {
 children: React.ReactNode;
}

const ChallengeContextProvider = ({ children }: ChallengeContextProviderProps) => {
    const [challenges, setChallenges] = useState(initialState.challenges);

    const saveChallenge = (challenge: Partial<IChallenge> & Omit<IChallenge, 'id'>) => {
        setChallenges((prev) => {
            if (challenge.id) {
                return prev.map((c) => {
                    if (c.id === challenge.id) {
                        return challenge as IChallenge;
                    }
                    return c;
                });
            }

            return [...prev, { ...challenge, id: nanoid() }];
        });
    }

    const deleteChallenge = (id: string) => {
        setChallenges((prev) => prev.filter((c) => c.id !== id));
    }

    return (
        <ChallengeContext.Provider value={{ challenges, saveChallenge, deleteChallenge }}>
            {children}
        </ChallengeContext.Provider>
    )
}

export const useChallengeContext = () => useContext(ChallengeContext);

export default ChallengeContextProvider;