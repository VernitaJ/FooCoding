# src/views

This folder contains _React Components_ that are
**used within a React Router Route**.

Those will receive some properties from the route component itself, and
they are attached and removed from the page based on the route condition.

In many apps, those components are used in combination with some form of
**Application State**, thus they share the name of "Views" and "Controllers".

In a modern React Hooks app, this kind of component is responsible to use
informations from the route (es: `props.match.params`) to initiate some form
of state such downloading data from a remote API.

The rendering of the component itself is often delegated to
**Layouts** and **Dumb Components**.
