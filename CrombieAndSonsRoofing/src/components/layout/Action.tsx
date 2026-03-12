type ActionProps = {
  buttons: { buttonText: string; buttonRef: string }[];
  prompt: string,
  header: string,
  directive: string
};
export default function Action({buttons, prompt, header, directive} : ActionProps)
{
    const actionButtons = (
        <div className="financing-cta-actions">
            {buttons.map((b, i) => {
            return (
                <a
                key={i}
                href={b.buttonRef}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                >
                {b.buttonText}
                </a>
            );
            })}
        </div>
        );
    return (
        <div className="container financing-cta-box">
          <div>
            <p className="section-label">{prompt}</p>
            <h2>{header}</h2>
            <p>
              {directive}
            </p>
          </div>
          {actionButtons}
        </div>);
}