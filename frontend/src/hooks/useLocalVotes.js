import { useState } from 'react';

const useLocalVotes = (id) => {
  const [votedPolls] = useState(
    JSON.parse(window.localStorage.getItem('votedPolls')) || []
  );
  const iCanVote = () => {
    return !votedPolls.includes(id);
  };
  const voteLocal = () => {
    window.localStorage.setItem(
      'votedPolls',
      JSON.stringify([...votedPolls, id])
    );
  };
  return { iCanVote, voteLocal };
};

export default useLocalVotes;
