const express = require('express');
const supa = require('@supabase/supabase-js');
const app = express();
const supaUrl = 'https://cgtkbuafufcvecpuzkgv.supabase.co';
const supaAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNndGtidWFmdWZjdmVjcHV6a2d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4NjM3NTcsImV4cCI6MjAyNDQzOTc1N30.SOvR9HMXjpMtJilbGPUrqp_zSbX9AnYsgVWuTs6LdnM';
const supabase = supa.createClient(supaUrl, supaAnonKey);

app.get('/f1/status', async (req, res) => {
    const {data, error} = await supabase
        .from('status')
        .select();
    res.send(data);
});

app.get('/f1/seasons', async (req, res) => {
    const {data, error} = await supabase
        .from('seasons')
        .select();
    res.send(data);
});

app.get('/f1/races', async (req, res) => {
    const {data, error} = await supabase
        .from('races')
        .select(`
            raceId, year, round, circuitId, name, circuits (name,location,country)
        `)
        .eq('year',2020)
        .order('round', { ascending: false });
    res.send(data);
});

app.get('/f1/results/:race', async (req, res) => {
    const {data, error} = await supabase
        .from('results')
        .select(`
            resultId, positionOrder, races (year, name),
            drivers (forename,surname), constructors (name)
        `)
        .eq('raceId',req.params.race)
        .order('positionOrder', { ascending: true });
    res.send(data);
});

app.listen(8080, () => {
    console.log('listening on port 8080');
    console.log('http://localhost:8080/f1/status');
    console.log('http://localhost:8080/f1/seasons');
    console.log('http://localhost:8080/f1/races');
});