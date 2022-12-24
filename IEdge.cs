using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MDiagramRazorComponent
{
    public interface IEdge
    {
        string Id { get; set; }
        string Text { get; set; }
        string FromId { get; set; }
        string ToId { get; set; }
    }
}
