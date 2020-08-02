const API_URI = "http://localhost:4100/api/v1/email";

export const sendEmail = async (data) => {
  console.log(data);
  try {
    const res = await fetch(API_URI, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res);
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};
