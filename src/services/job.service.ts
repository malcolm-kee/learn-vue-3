export interface Job {
  title: string;
  department: string;
  _id: string;
}

export const getJobs = (
  page = 1,
  abortSignal?: AbortSignal
): Promise<Array<Job>> =>
  fetch(`https://ecomm-service.herokuapp.com/job?page=${page}`, {
    signal: abortSignal,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
  });

export const addJob = (jobData: {
  title: string;
  department: string;
  level: string;
  summary: string;
  headcount: number;
}) =>
  fetch('https://ecomm-service.herokuapp.com/job', {
    method: 'POST',
    body: JSON.stringify(jobData),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
  });
