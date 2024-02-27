// workshops needed in the homepage so I will separate this out to reduce repetition
export default async function getWorkshops() {
    const response = await fetch('https://ec2.goodey.co.uk:8443/Workshops', {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    return data;
}