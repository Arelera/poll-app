const baseUrl = 'http://localhost:3001/api/polls';

export const getAll = async () => {
  const response = await fetch(baseUrl);
  return await response.json();
};

export const getOne = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`);
  return await response.json();
};

export const createOne = async (poll) => {
  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(poll),
    });

    const createdPoll = await response.json();
    return createdPoll;
  } catch (error) {
    console.log(error);
  }
};

export const voteOne = async (poll) => {
  const pollToSend = { ...poll, choices: JSON.stringify(poll.choices) };
  try {
    const response = await fetch(baseUrl, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pollToSend),
    });

    const data = await response; // no need for .json()
    return data;
  } catch (error) {
    console.log(error);
  }
};
