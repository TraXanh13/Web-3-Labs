const { createClient } = supabase;

const supaUrl = 'https://cgtkbuafufcvecpuzkgv.supabase.co';
const supaAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNndGtidWFmdWZjdmVjcHV6a2d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4NjM3NTcsImV4cCI6MjAyNDQzOTc1N30.SOvR9HMXjpMtJilbGPUrqp_zSbX9AnYsgVWuTs6LdnM';

const db = createClient(supaUrl, supaAnonKey);
fetchRaceData(2020);

async function fetchRaceData(year) {
    // uses the same API as the Node examples
    const { data, error } = await db.from('races')
        .select('*')
        .eq('year',year)
        .order('round', { ascending: true });;
    
    if (error) {
        console.error('Error fetching data:', error);
        return;
    }

    // populate first unordered list
    const first = document.querySelector("#first");
    for (let d of data) {
        const li = document.createElement("li");
        li.textContent = d.name;
        li.value = d.raceId;
        first.appendChild(li);

        li.addEventListener('click', e => {
            document.querySelector("#title").textContent = "Results for " + e.target.textContent;
            fetchResultsData(e.target.value);
        })
    }

    async function fetchResultsData(raceid) {
        const { data, error } = await db.from('results')
            .select(`
                resultId, positionOrder, drivers (forename,surname),
                constructors (name)
            `)
            .eq('raceId',raceid)
            .order('positionOrder', { ascending: true });
        
        if (error) {
            console.error('Error fetching data:', error);
            return;
        }

        console.log(data)

        const second = document.querySelector("#second");
        second.innerHTML = "";
        for (let d of data) {
            const li = document.createElement("li");
            li.textContent = `${d.positionOrder}:
            ${d.drivers.forename} ${d.drivers.surname};
            [${d.constructors.name}]`;
            second.appendChild(li);
        }
    }
}